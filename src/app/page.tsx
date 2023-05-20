import Image from 'next/image'

export default function Home() {
  return (
   <>

   <div style={{height: "100vh",width : "100vw"}}></div>
   <div style={{height: "100vh",width : "100vw"}}></div>
   <div style={{height: "100vh",width : "100vw"}}></div>
   <div style={{height: "100vh",width : "100vw"}}></div>

<div style={{position:"relative",height: "100px",width:"200px"}}>
    <Image src="https://web.glance-cdn.com/images/glance-website/corp/lockscreen/as-simple/travel-bg.webp"
      alt=''
      fill={true}
      loading="lazy"
    />
</div>
   </>
  )
}
