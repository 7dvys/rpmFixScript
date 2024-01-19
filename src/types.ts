export type MlProductsWithSkusWithMatch = {
    [mla:string]:{
        [sku:string]:{
            titulo:string,
            cbTitulo:string,
            match:boolean
        }
    }
};

export type MlProductsWithSkusWithMatchWithCbProducts = {
    [mla:string]:{ // Aquellos sku no listados aqui, es decir sin match seguiran con el index "onlyCb"
        [sku:string]:{
            925:{
                titulo:string,
                cbTitulo:string,
                match:boolean,
                completeMatch:boolean,
            },
            764:{
                titulo:string,
                cbTitulo:string,
                match:boolean,
                completeMatch:boolean,
            }
        }
    }
}

export type PublicacionesDiscriminadas = {
    [key in 'withMatchs' | 'withoutMatchs']: MlProductsWithSkusWithMatch;
}

export type SheetJson = (string|null)[][]

export type SerializedCbProducts = {[sku:string]:{titulo:string,estado:string}};
export type SerializedMlProducts = {[mla:string]:{[sku:string]:string}};

