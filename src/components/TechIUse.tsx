import TechIUseComp from "./TechIUseComp"

const TechIUse = () => {
    return (
        <div className="mt-10 px-4  w-full h-full bg-white dark:bg-black">
        <h1 className="text-lg font-medium">Tech I use</h1>
        <div className="lg:flex lg:flex-col flex flex-col mt-3 gap-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-zinc-400">🔤 Languages</h2>
                <div className="flex flex-wrap justify-start gap-2">
                    <TechIUseComp title="Python" img="https://pngteam.com/images/python-logo-png-1024x1024_7d6af8d1_transparent_2023e8.png.png" />
                    <TechIUseComp title="JavaScript" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1&ipt=ac903dc87bc2af20bf431cff66c063da3cee40f684c2d035ea1a749410358bc7" />
                    <TechIUseComp title="TypeScript" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnbmobile.com%2Fimages%2Ftypescript_logo.png&f=1&nofb=1&ipt=adcf3e5571893739508298e68b222fb4badac3352e2b56e3863e800a5a34d7d2" />
                    <TechIUseComp title="HTML" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1532%2F1532556.png&f=1&nofb=1&ipt=d5da54f70ff7d462eea32c02805f15cef7417ad4797576d9c2fd2522e64f2483" />
                    <TechIUseComp title="CSS" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fhtml5-logo-transparent-background-4.png&f=1&nofb=1&ipt=6aa8744a2662a39fbc384f029b53ab9f4b904b57afcd86cd95094aa762084668" />
                    <TechIUseComp title="C" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ingenioempresa.com%2Fwp-content%2Fuploads%2F2022%2F09%2FC-Language.png&f=1&nofb=1&ipt=2b23a9ae4625f7da69ec6b907a22675b08f5129a9681380e3e51966775bbb4b8" />
                    <TechIUseComp title="C++" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Framhegu27.github.io%2FMy-Portfolio%2FImage%2Fc%2B%2B.png&f=1&nofb=1&ipt=420056dfceda45367e59969fdf1f7d55b30c6438b1764c2b340854bf2b84b357" />
                </div>
            </div>
            <div>
                <h2 className="text-zinc-400">🗃️ Databases</h2>
                <div className="flex flex-wrap justify-start gap-2">
                <TechIUseComp title="MySQL" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fmysql-icon-27.png&f=1&nofb=1&ipt=bac6c37663c81294514cd3427ce32f49624665e157988e66298761575968064e" />
                <TechIUseComp title="Supabase" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompanieslogo.com%2Fimg%2Forig%2Fsupabase-554aca1c.png%3Ft%3D1720244494&f=1&nofb=1&ipt=ea5e08d4c0d6e0545b7f3085868d72383a5c26903cfcf86233456d1128db4032" />                    
                </div>
            </div>
            <div>
                <h2 className="text-zinc-400">🧰 Frameworks & Tools</h2>
                <div className="flex flex-wrap justify-start gap-2">
                <TechIUseComp title="React.js" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpewlehh.com%2Fimages%2Freact.png&f=1&nofb=1&ipt=c523823460156cc5df2e6a193a1755b63b83f5bdc3a67b66f3126400154d62fb" />                                        
                <TechIUseComp title="Tailwind CSS" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FTailwind_CSS_Logo.svg%2F1024px-Tailwind_CSS_Logo.svg.png%3F20230715030042&f=1&nofb=1&ipt=5bcc48173a69f40019ff06282b5a85fd00ce28995a1690081b100e23f6a94b9a" />                                        
                <TechIUseComp title="Bootstrap" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcodekitapp.com%2Fimages%2Fhelp%2Ffree-bootstrap-icon%402x.png&f=1&nofb=1&ipt=9a83f6e65c7cdd3d243acf300a25627415b1bfd38650e5e13a39dd800e3556bc" />                                        
                <TechIUseComp title="Node.js" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhumancoders-formations.s3.amazonaws.com%2Fuploads%2Fcourse%2Flogo%2F14%2Fformation-node-js.png&f=1&nofb=1&ipt=c0ac7283b680f70ea7fab796e7d967c577849488173b0d97613a23d65596aa08" />                                        
                <TechIUseComp title="Astro" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.x-T6v-Ml7MhcZhJ5S9wzdwAAAA%26pid%3DApi&f=1&ipt=24271466eefd5cdb237b670a43c573a96547889b6226fdd4cd0834dde2bd9572&ipo=images" />                                        
                <TechIUseComp title="GSAP" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdzakifadh.dev%2Fimg%2Fgsap.png&f=1&nofb=1&ipt=1026461836e28b9756d2ccc443a34f82dee3215cf9e984f4e4a5ad0782b5a222" />                                        
                <TechIUseComp title="Framer Motion" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kevchentw.com%2Fblog%2Fspring-parallax-framer-motion-guide%2Flogo.png&f=1&nofb=1&ipt=5a44918246e2833bc79011cb12e1794090e0fdde10ae8ce66f2a7daa4ef1aa5f" />                                        
                </div>
            </div>
        </div>
    </div>
    )
}

export default TechIUse