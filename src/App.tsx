import { ColorContrastChecker } from './components/ColorContrastChecker'

export const App = () => {
  return (
    <>
      <form className='color-picker' action=''>
        <fieldset>
          <legend className='visually-hidden'>Pick a color scheme</legend>
          <label htmlFor='light' className='visually-hidden'>
            Light
          </label>
          <input type='radio' name='theme' id='light' defaultChecked />

          <label htmlFor='pink' className='visually-hidden'>
            Pink theme
          </label>
          <input type='radio' id='pink' name='theme' />

          <label htmlFor='blue' className='visually-hidden'>
            Blue theme
          </label>
          <input type='radio' id='blue' name='theme' />

          <label htmlFor='green' className='visually-hidden'>
            Green theme
          </label>
          <input type='radio' id='green' name='theme' />

          <label htmlFor='dark' className='visually-hidden'>
            Dark theme
          </label>
          <input type='radio' id='dark' name='theme' />
        </fieldset>
      </form>

      <ColorContrastChecker />

      <main>
        <div className='wrapper'>
          <h1>Color-schemes with color-mix()</h1>
          <p>
            Lorem, <strong>ipsum dolor sit amet consectetur</strong> adipisicing elit. Obcaecati
            natus error quam suscipit architecto enim nobis vero eaque. Repudiandae{' '}
            <a href='#'>quisquam impedit fugiat</a> neque delectus doloremque!
          </p>
          <p>
            Rem neque inventore necessitatibus <em>totam incidunt eius</em> reprehenderit quis ipsam
            officia praesentium, quod vero soluta maxime iure nobis dolorum a quibusdam officiis
            ratione debitis? Ipsam.
          </p>
          <h2>Something interesting</h2>
          <div className='auto-grid'>
            <div className='card'>
              <h3 className='card__title'>A medium-length title</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, atque.</p>
            </div>
            <div className='card'>
              <h3 className='card__title'>A short title</h3>
              <p>Voluptatem excepturi tempore quo recusandae sunt ullam earum optio cum?</p>
            </div>
            <div className='card'>
              <h3 className='card__title'>A medium-length title</h3>
              <p>
                Nam laudantium voluptas, tenetur repellendus numquam rem incidunt deleniti
                veritatis?
              </p>
            </div>
            <div className='card'>
              <h3 className='card__title'>A much longer title than the others</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, atque.</p>
            </div>
            <div className='card'>
              <h3 className='card__title'>A medium-legth title</h3>
              <p>Voluptatem excepturi tempore quo recusandae sunt ullam earum optio cum?</p>
            </div>
            <div className='card'>
              <h3 className='card__title'>A short title</h3>
              <p>
                Nam laudantium voluptas, tenetur repellendus numquam rem incidunt deleniti
                veritatis?
              </p>
            </div>
          </div>
          <p>
            Rerum, neque! Consequuntur obcaecati beatae dolorum, fuga itaque iusto dicta et corporis
            facere ea necessitatibus odit cum, voluptates harum, dolore maiores aliquid distinctio
            repellendus nesciunt!
          </p>
          <p>
            Unde dolor quod delectus obcaecati labore laboriosam optio sit eligendi. Excepturi
            explicabo quod obcaecati pariatur error, in, accusantium eum omnis repellat qui, aliquid
            magnam odit?
          </p>
        </div>
      </main>
    </>
  )
}
