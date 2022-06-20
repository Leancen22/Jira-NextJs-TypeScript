interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status: string,
    createdAt: number
}

export const seedData : SeedData = {
    entries: [
        {
            description: 'pending : Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'in-progess : dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'finished : Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}