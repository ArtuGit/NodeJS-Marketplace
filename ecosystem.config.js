module.exports = {
  apps: [
    {
      name: 'Marketplace Demo',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'run prod'
    }
  ]
}