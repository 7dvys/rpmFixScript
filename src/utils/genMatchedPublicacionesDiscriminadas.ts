import { MlProductsWithSkusWithMatchWithCbProducts, SerializedCbProducts, SerializedMlProducts } from "../types";

export const genMatchedPublicacionesDiscriminadas = ({
    serializedCbProducts,
    serializedMlProducts
}:{
    serializedCbProducts:SerializedCbProducts,
    serializedMlProducts:SerializedMlProducts
}):MlProductsWithSkusWithMatchWithCbProducts=>{

    Object.entries(serializedMlProducts).reduce((acc,[mla,skus])=>{

        const skusWitchMatches = Object.entries(skus).reduce((acc,[sku,titulo])=>{
            const match = (sku in serializedCbProducts);
            const cbTitulo = match?serializedCbProducts[sku].titulo:'';
            acc[sku] = {titulo,cbTitulo,match};
            return acc
        },{} as {[sku:string]:{titulo:string,cbTitulo:string,match:boolean}})

        const hasSkuWithoutMatch = Object.values(skusWitchMatches).some(({match})=>!match);
        
        acc[discriminacion][mla] = skusWitchMatches;
        return acc

    },{usedCbSkus:[]} as MlProductsWithSkusWithMatchWithCbProducts&{usedCbSkus:string[]})    
}