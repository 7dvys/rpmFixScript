"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicacionesDiscriminadas = void 0;
const publicacionesDiscriminadasDefault = {
    withMatchs: {},
    withoutMatchs: {},
};
const getPublicacionesDiscriminadas = ({ serializedMlProducts, serializedCbProducts }) => Object.entries(serializedMlProducts).reduce((acc, [mla, skus]) => {
    const skusWitchMatches = Object.entries(skus).reduce((acc, [sku, titulo]) => {
        const match = (sku in serializedCbProducts);
        const cbTitulo = match ? serializedCbProducts[sku].titulo : '';
        acc[sku] = { titulo, cbTitulo, match };
        return acc;
    }, {});
    const hasSkuWithoutMatch = Object.values(skusWitchMatches).some(({ match }) => !match);
    const discriminacion = hasSkuWithoutMatch ? 'withoutMatchs' : 'withMatchs';
    acc[discriminacion][mla] = skusWitchMatches;
    return acc;
}, publicacionesDiscriminadasDefault);
exports.getPublicacionesDiscriminadas = getPublicacionesDiscriminadas;
