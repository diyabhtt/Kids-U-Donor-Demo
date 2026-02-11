'use client'
import { useState, useEffect } from 'react'
import { demoLocations } from '@/app/demo/demoData'

export default function AddOrientation() {
  const [locations, setLocations] = useState<{ id: string; name: string }[]>([])
  const [form, setForm] = useState({
    name: '',
    description: '',
    schedule: '',
    capacity: '',
    locationId: ''
  })

  useEffect(() => {
    setLocations(demoLocations)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo only. Orientation is not saved.')
    setForm({ name: '', description: '', schedule: '', capacity: '', locationId: '' })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg border rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Create Orientation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="datetime-local" name="schedule" value={form.schedule} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="capacity" placeholder="Capacity" value={form.capacity} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="locationId" value={form.locationId} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Location</option>
          {locations.map((loc: any) => (
            <option key={loc.id} value={loc.id}>{loc.name}</option>
          ))}
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create</button>
      </form>
    </div>
  )
}
