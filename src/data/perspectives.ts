import type { BesoinFinancier } from '@/types'

export const besoinsFinanciers2026: BesoinFinancier[] = [
  {
    id: 'coordinateur',
    label: "Coordinateur·rice général·e",
    montantAnnuel: 45000,
    description:
      "Pilotage opérationnel, coordination des membres, suivi des instances et des dossiers de financement.",
    priorite: 'critique',
  },
  {
    id: 'charge-dev',
    label: 'Chargé·e de développement & communication',
    montantAnnuel: 42000,
    description:
      "Mécénat, partenariats, relations presse, réseaux sociaux, rédaction des dossiers de subvention.",
    priorite: 'critique',
  },
  {
    id: 'local',
    label: 'Espace de travail',
    montantAnnuel: 8000,
    description:
      "Espace de coworking ou bureau associatif en Île-de-France, incluant salles de réunion à la demande.",
    priorite: 'important',
  },
]

export const totalBesoin2026 = besoinsFinanciers2026.reduce(
  (acc, b) => acc + b.montantAnnuel,
  0
)

export const messageBesoins =
  "Pour poursuivre son développement, UNANIMES a besoin de 95 000 € supplémentaires par an : deux postes salariés et un espace de travail. Ces ressources constituent le seuil nécessaire pour passer d'un fonctionnement reposant entièrement sur le bénévolat à une organisation structurée, capable d'agir à la hauteur de ses responsabilités nationales."