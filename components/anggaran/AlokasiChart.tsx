'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { anggaranInfo } from '@/data/anggaran'

export default function AlokasiChart() {
  return (
    <div className="relative h-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={anggaranInfo.alokasi}
            dataKey="persen"
            nameKey="label"
            innerRadius={65}
            outerRadius={100}
            paddingAngle={2}
          >
            {anggaranInfo.alokasi.map((entry, i) => (
              <Cell key={i} fill={entry.warna} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
