//|-/ DbConnect - Mongo
const dbUser = 'mts';
const dbPasswd = 'urubu100';

module.exports = {
    connectionString: `mongodb+srv://${dbUser}:${dbPasswd}@quatropatas.zjhon.mongodb.net/Data`,
    containerConnectionString: 'DefaultEndpointsProtocol=https;AccountName=mts4;AccountKey=C/QdwLkxq5eoiuPKBT6Trt1s2ZbF7X+Qvu0yv4hfy8afmxkmcJm4EH473WSdpz+8bui0kmBQw/OA+AStoUKNXg==;EndpointSuffix=core.windows.net'
}