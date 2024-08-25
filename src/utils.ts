export namespace Utils {
    export function formatNumber(value: number) {
        return new Intl.NumberFormat('pt-BR').format(value);
    }
}