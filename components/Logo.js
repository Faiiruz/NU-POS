import Image from "next/image";

export default function Logo(){
   return(
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            {/* <Image 
                src="/logo.png"
                alt="Logo GNUSA API"
                width={180}
                height={40} 
            /> */}
             <Image 
                src="/image/logo-nu.jpeg"
                alt="Logo NU POS"
                width={180}
                height={40} 
            />
        </div>
);
}