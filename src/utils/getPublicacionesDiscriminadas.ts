import { SerializedMlProducts, SerializedCbProducts, PublicacionesDiscriminadas } from "../types";

const publicacionesDiscriminadasDefault:PublicacionesDiscriminadas = {
    withMatchs: {},
    withoutMatchs: {},
};

export const getPublicacionesDiscriminadas = ({serializedMlProducts,serializedCbProducts}:{serializedCbProducts:SerializedCbProducts,serializedMlProducts:SerializedMlProducts})=>
    Object.entries(serializedMlProducts).reduce((acc,[mla,skus])=>{
        const skusWitchMatches = Object.entries(skus).reduce((acc,[sku,titulo])=>{
            const match = (sku in serializedCbProducts);
            const cbTitulo = match?serializedCbProducts[sku].titulo:'';
            acc[sku] = {titulo,cbTitulo,match};
            return acc
        },{} as {[sku:string]:{titulo:string,cbTitulo:string,match:boolean}})

        const hasSkuWithoutMatch = Object.values(skusWitchMatches).some(({match})=>!match);
        
        const discriminacion = hasSkuWithoutMatch?'withoutMatchs':'withMatchs';
        acc[discriminacion][mla] = skusWitchMatches;
        return acc

    },publicacionesDiscriminadasDefault)
