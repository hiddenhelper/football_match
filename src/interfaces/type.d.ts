interface MatchDataItem {
    name: string
    eventID: string
    eventStatus: string
    goLiveAt: string
    sport: sportType
    tournament: tournamentType
    prizePools: prizePools
    matchSeries: string
    entry: boolean
}

type TokiState = {
    matches: MatchDataItem[]
    pending: boolean
}

type TokiAction = {
    type: string
    matches: MatchDataItem[]
    match: MatchDataItem | null
}

type DispatchType = (args: TokiAction) => TokiAction

type MatchItemProps = {
    match: MatchDataItem
    setEntry(match: MatchDataItem): TokiAction
}

type sportType = {
    sportID: string
    name: string
    abbreviation: string
    imageUrl: string
}

type tournamentType = {
    tournamentId: string
    name: string
    stage: string
}

type prizePools = {
    winningsPrizePoolAmount: float
    bonusPrizePoolAmount: float
}

type MatchListProps = {
    matches: MatchDataItem[]
}

export type HeaderProps = {
    matches?: MatchDataItem[]
}

type DashboardProps = {
    fetchData(url: string): any
    pending: boolean
    matches: MatchDataItem[]
}
