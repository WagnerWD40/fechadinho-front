export interface Entity {
    id: number;
}

export interface Campeao extends Entity {
    nome: string;
    idRiot: number;
}

export interface Rota extends Entity  {
    nome: string;
    url: string;
}

export interface Jogador extends Entity  {
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
    rankSolo: string;
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

export interface Partida extends Entity  {
    equipes: Equipe[];
    vitoriaTimeAzul: boolean;
    data: string;
    duracao: string;
}

