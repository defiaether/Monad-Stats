const mockData = {
  stats: {
    totalTransactions: 128452123,
    activeWallets: 54231,
    tokenVolume24h: 1245786,
    gasUsedToday: 9384221,
    blockTime: "1.2s",
    totalBlocks: 829441,
  },

  transactionsPerDay: [
    { date: '2025-06-01', count: 10232 },
    { date: '2025-06-02', count: 12201 },
    { date: '2025-06-03', count: 13112 },
    { date: '2025-06-04', count: 11587 },
    { date: '2025-06-05', count: 10992 },
    { date: '2025-06-06', count: 14820 },
    { date: '2025-06-07', count: 15432 },
  ],

  contractUsage: [
    { name: 'DEX', value: 45 },
    { name: 'NFT', value: 25 },
    { name: 'Bridge', value: 15 },
    { name: 'Other', value: 15 },
  ],

  latestTransactions: [
    {
      hash: '0x1a2b3c4d5e6f7g8h9i0j',
      from: '0xabc123...789',
      to: '0xdef456...123',
      amount: '423 MON',
      time: '2m ago',
    },
    {
      hash: '0x3c4d5e6f7g8h9i0j1a2b',
      from: '0xaaa111...222',
      to: '0xbbbb222...333',
      amount: '1,200 MON',
      time: '5m ago',
    },
    {
      hash: '0x5e6f7g8h9i0j1a2b3c4d',
      from: '0xccc333...444',
      to: '0xddd444...555',
      amount: '76 MON',
      time: '9m ago',
    },
    {
      hash: '0x7g8h9i0j1a2b3c4d5e6f',
      from: '0xeee555...666',
      to: '0xfff666...777',
      amount: '320 MON',
      time: '15m ago',
    },
  ],
};

export default mockData;
