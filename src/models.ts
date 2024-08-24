export interface Campeao {
    id: number;
    nome: string;
    idRiot: number;
}

export interface Rota {
    id: number;
    nome: string;
    url: string;
}

export interface Jogador {
    id: number;
    nickname: string;
    rotaMain: Rota;
}

export interface Conhecido extends Jogador {
    nome: string;
    discord: string;
    whatsapp: string;
}

export interface Convidado extends Jogador {
    origemContato: string;
}

export interface Pick {
    jogador: Jogador;
    campeao: Campeao;
    rota: Rota;
    abates: number;
    mortes: number;
    assistencias: number;
    danoCausado: number;
    danoRecebido: number;
    gold: number;
    cs: number;
}

export interface Equipe {
    picks: Pick[];
    side: string;
    dragao: number;
    barao: number;
    herald: number;
    grub: number;
    torre: number;
    inibidor: number;
}

export interface Partida {
    id: number;
    equipes: Equipe[];
    vitoriaTimeAzul: boolean;
    data: string;
    duracao: string;
}

