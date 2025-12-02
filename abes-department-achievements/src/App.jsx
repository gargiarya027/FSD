import React, { useEffect, useMemo, useState } from 'react'
import Logo from './assets/abes-logo.png'

const emptyAchievement = {
  title: '',
  student: '',
  faculty: '',
  year: new Date().getFullYear(),
  category: '',
  date: '',
  department: '',
  description: ''
}

export default function App(){
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('abes_achievements')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const [form, setForm] = useState(emptyAchievement)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ category: '', department: '', from: '', to: '' })

  useEffect(()=> localStorage.setItem('abes_achievements', JSON.stringify(items)), [items])

  const departmentsCount = useMemo(()=>{
    const map = {}
    items.forEach(i => {
      const d = i.department || 'Unassigned'
      map[d] = (map[d] || 0) + 1
    })
    return map
  }, [items])

  const handleAdd = (e) => {
    e.preventDefault()
    // don't add empty titles
    if(!form.title.trim()) return alert('Title is required.')
    setItems(prev => [{ ...form, id: Date.now() }, ...prev])
    setForm(emptyAchievement)
  }

  const handleDelete = (id) => {
    if(!confirm('Delete this achievement?')) return
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const handleSearchMatch = (it, q) => {
    if(!q) return true
    q = q.toLowerCase()
    return ['title','student','faculty','year'].some(k => (it[k]||'').toString().toLowerCase().includes(q))
  }

  const applyFilters = (it) => {
    const { category, department, from, to } = filters
    if(category && it.category !== category) return false
    if(department && it.department !== department) return false
    if(from && it.date < from) return false
    if(to && it.date > to) return false
    return true
  }

  const results = items.filter(it => handleSearchMatch(it, query) && applyFilters(it))

  const unique = (key) => {
    const s = new Set(items.map(i => i[key]).filter(Boolean))
    return Array.from(s).sort()
  }

  return (
    <div className="wrap">
      <header className="header">
        <img src={Logo} alt="ABES" className="logo" />
        <h1>ABES — Department Achievement Tracker</h1>
      </header>

      <section className="controls">
        <div className="search">
          <input placeholder="Search by title, student, faculty, year..." value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <div className="filters">
          <select value={filters.category} onChange={e=>setFilters(f=>({...f, category:e.target.value}))}>
            <option value=''>All Categories</option>
            {unique('category').map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filters.department} onChange={e=>setFilters(f=>({...f, department:e.target.value}))}>
            <option value=''>All Departments</option>
            {unique('department').map(d=> <option key={d} value={d}>{d}</option>)}
          </select>
          <input type="date" value={filters.from} onChange={e=>setFilters(f=>({...f, from:e.target.value}))} title="From date"/>
          <input type="date" value={filters.to} onChange={e=>setFilters(f=>({...f, to:e.target.value}))} title="To date"/>
          <button onClick={()=>setFilters({category:'',department:'',from:'',to:''})}>Clear Filters</button>
        </div>
      </section>

      <section className="stats">
        <strong>Total achievements:</strong> {items.length}
        <div className="counts">
          {Object.keys(departmentsCount).length === 0 ? <em>No departments yet</em> :
            Object.entries(departmentsCount).map(([d,c])=> <div key={d} className="count">{d}: {c}</div>)
          }
        </div>
      </section>

      <section className="add">
        <h2>Add Achievement</h2>
        <form onSubmit={handleAdd} className="form">
          <input placeholder="Title" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} />
          <input placeholder="Student name" value={form.student} onChange={e=>setForm(f=>({...f,student:e.target.value}))} />
          <input placeholder="Faculty name" value={form.faculty} onChange={e=>setForm(f=>({...f,faculty:e.target.value}))} />
          <input placeholder="Year" value={form.year} onChange={e=>setForm(f=>({...f,year:e.target.value}))} />
          <input placeholder="Category" value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} />
          <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} />
          <input placeholder="Department" value={form.department} onChange={e=>setForm(f=>({...f,department:e.target.value}))} />
          <textarea placeholder="Description (optional)" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} />
          <div style={{display:'flex',gap:8}}>
            <button type="submit">Add</button>
            <button type="button" onClick={()=>setForm(emptyAchievement)}>Reset</button>
          </div>
        </form>
      </section>

      <section className="list">
        <h2>Results ({results.length})</h2>
        {results.length === 0 ? <div className="empty">No achievements found — add one above.</div> :
          <ul>
            {results.map(it=>(
              <li key={it.id} className="item">
                <div className="meta">
                  <strong>{it.title}</strong> <span>({it.year})</span>
                </div>
                <div className="sub">{it.student} — {it.faculty} — {it.department} — {it.category} — {it.date}</div>
                {it.description && <div className="desc">{it.description}</div>}
                <div className="actions">
                  <button onClick={()=>handleDelete(it.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        }
      </section>

     
    </div>
  )
}
