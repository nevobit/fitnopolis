import Image from "next/image";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <>
    <section className={styles.section} >
      <div className={styles.bg} >
        <div>

  <video className={styles.video} poster="https://global.bowflex.com/on/demandware.static/-/Sites-nautilus-international-Library/default/dw1e7c91e7/bfx/homepage/posters/bowflex-hp-rebrand-launch-1920x800-poster-d.jpg" autoPlay={true} loop={true} playsInline tabIndex={0}>
<source src="https://download.bowflex.com/video/bfx/june23/bowflex-hp-rebrand-launch-1920x800.mp4" type="video/mp4" />
      </video>
      
      <video className={styles.video_mobile} poster="https://global.bowflex.com/on/demandware.static/-/Sites-nautilus-international-Library/default/dwadc9d996/bfx/homepage/posters/bowflex-hp-rebrand-launch-428x613-poster-m.jpg" autoPlay={true} loop={true} playsInline >
<source src="https://download.bowflex.com/video/bfx/june23/bowflex-hp-rebrand-launch-428x613.mp4" type="video/mp4" />
</video>
        </div>

          <div className={styles.copy} >
        <h1>Fomenta el amor por el movimiento</h1>
        <p>El fitness debe sentirse bien</p>
        </div>
      </div>
    
      </section>
          
    <section>
        <h2 className={styles.subtitle} >Every body has a favorite. Explore our categories.</h2>

        <div className={styles.categories}>
          <div>
            <Image src="/bikes.webp" alt='Bicicletas Estaticas' width={150} height={150} />
            <h3>Bicicletas</h3>
          </div>
          <div>
            <Image src="/treadmill.webp" alt='Bicicletas Estaticas' width={150} height={150} />
            <h3>Caminadoras</h3>
          </div>
          <div>
            <Image src="/weights.webp" alt='Bicicletas Estaticas' width={150} height={150} />
            <h3>Pesas</h3>
          </div>
          <div>
            <Image src="/termos.webp" alt='Termos' width={150} height={150} />
            <h3>Termos</h3>
          </div>
        </div>
    </section>
    </>

  );
}
