import devConfig from 'configs/dev.json';
import prodConfig from 'configs/prod.json';

export default (process.env.NODE_ENV.toLowerCase() === 'production' ? prodConfig : devConfig);
