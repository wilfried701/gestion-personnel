import { Input } from '@angular/core'
import React from 'react'

export default function ajouterPersonnel () {
  const [nom, setNom] = React.useState('')
  const [prenom, setPrenom] = React.useState('')
  const [fonction, setFonction] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [telephone, setTelephone] = React.useState('')
  const [joursdetravail, setJourDeTravail] = React.useState('')

  return (
    <div className='ajouterPersonnel'>
      <h1>Ajouter un membre</h1>
      <div>
        <form>
          <div className='nom'>
            <label>Nom</label>
            <input
              name='nom'
              type='name'
              value={nom}
              onChange={e => setNom(e.target.value)}
              required
            />
          </div>

          <label>
            Prenom
            <input
              name='prenom'
              type='name'
              value={prenom}
              onChange={e => setPrenom(e.target.value)}
              required
            />
          </label>
          <label>Fonction</label>
          <input
            name='fonction'
            type='name'
            value={fonction}
            onChange={e => setFonction(e.target.value)}
            required
          />
          <label>
            Email
            <label>
              <input
                name='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              Telephone
            </label>
            <input
              name='telephone'
              type='number'
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              required
            />
          </label>

          <div>
            <h4>Jours de travail</h4>

            <div className='jours'>

              <input type="checkbox" name="lundi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> Lundi</label>
              <input type="checkbox" name="mardi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> mardi</label>
              <input type="checkbox" name="mercredi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> mercredi</label>
              <input type="checkbox" name="jeudi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> jeudi</label>
              <input type="checkbox" name="vendredi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> vendredi</label>
              <input type="checkbox" name="samedi" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> samedi</label>    
              <input type="checkbox" name="dimanche" onChange={e => setJourDeTravail(e.target.value)}/>
              <label> dimanche</label>

            </div>           
          </div>


          <div>
            <h4>Congés</h4>
          </div>

          <div className='conges'>
            <p>du</p>
            <input type='date' />
          </div>

          <div className='conges2'>
            <p>au</p>
            <input type='date' />
          </div>

          <div>
            <button className="creer">Creer</button>
            <button className="annuler">Annuler</button>
          </div>

        </form>
      </div>
    </div>
  )
}
