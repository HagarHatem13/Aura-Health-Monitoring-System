import { NextResponse } from 'next/server'

type Telemetry = { id: string; bpm: number; steps: number; distance: number; calories: number; activity: 'Resting' | 'Walking' | 'Running'; battery: number; createdAt: string }

let telemetry: Telemetry[] = [
  { id: 'seed-1', bpm: 72, steps: 1842, distance: 1.32, calories: 86, activity: 'Walking', battery: 86, createdAt: new Date().toISOString() },
]

export async function GET() {
  return NextResponse.json({ telemetry: telemetry.slice(-50).reverse() })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const bpm = Number(body.bpm)
  const steps = Number(body.steps)
  const battery = Number(body.battery ?? 86)
  if (!Number.isFinite(bpm) || bpm < 30 || bpm > 240 || !Number.isFinite(steps) || steps < 0) {
    return NextResponse.json({ error: 'Invalid telemetry payload' }, { status: 400 })
  }
  const activity: Telemetry['activity'] = steps > 100 ? 'Walking' : bpm > 100 ? 'Running' : 'Resting'
  const sample: Telemetry = { id: crypto.randomUUID(), bpm, steps, distance: Number((steps * 0.00072).toFixed(2)), calories: Math.round(steps * 0.045), activity, battery: Math.max(0, Math.min(100, battery)), createdAt: new Date().toISOString() }
  telemetry = [...telemetry, sample].slice(-50)
  return NextResponse.json(sample, { status: 201 })
}
