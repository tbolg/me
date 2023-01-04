export type CardRank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k' | 'a' | 'joker'
export type CardSuite = 's' | 'h' | 'd' | 'c'

export interface PlayingCardProps {
  rank: CardRank,
  suite: CardSuite,
}

export interface ClientContext {
  environment: 'development' | 'production';
}
