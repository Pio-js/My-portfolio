import './HomeCopy.css';

export default function Home(){

  const style = {position:'relative'};

  return (
      <section id='home-copy'>
        <div id='home-half1'>
          <div id='box-container1'>
            <div id='box-1-copy' className='box-copy' style={style}>
              <div className='transp-bg'><h1 style={{color: 'purple'}}>About</h1></div>
            </div>

            <div id='box-3-copy' className='box-copy' style={style}>
              <div className='transp-bg'><h1 style={{color: 'green'}}>Projects</h1></div>
            </div>          
          </div>
        </div>
          
        <div id='home-half2'>
          <div id='box-container2'>
            <div id='box-2-copy' className='box-copy' style={style}>
              <div className='transp-bg'><h1 style={{color: 'blue'}}>Skills</h1></div>
            </div>

            <div id='box-4-copy' className='box-copy' style={style}>
              <div className='transp-bg'><h1 style={{color: 'tomato'}}>Contact</h1></div>
            </div>
          </div>
        </div>
      </section>
  );
}