import mongoose from 'mongoose';
import { env } from '../../config/env.config';

/**
 * Conectar a MongoDB
 * Intenta conectar con reintentos automáticos
 */
export const connectDatabase = async (): Promise<void> => {
  const maxRetries = 5;
  let retries = 0;

  const connect = async () => {
    try {
      const mongoUri = env.NODE_ENV === 'test' ? env.MONGODB_URI_TEST : env.MONGODB_URI;

      if (!mongoUri) {
        throw new Error('MONGODB_URI no está definida');
      }

      await mongoose.connect(mongoUri);

      console.log('✅ MongoDB conectado exitosamente');
      console.log(`📊 Base de datos: ${mongoose.connection.name}`);
      console.log(`🌍 Host: ${mongoose.connection.host}`);
    } catch (error) {
      retries++;
      console.error(`❌ Error conectando a MongoDB (intento ${retries}/${maxRetries}):`, error);

      if (retries < maxRetries) {
        console.log(`🔄 Reintentando en 5 segundos...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await connect();
      } else {
        console.error('❌ No se pudo conectar a MongoDB después de varios intentos');
        throw error;
      }
    }
  };

  await connect();
};

/**
 * Desconectar de MongoDB
 */
export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('👋 MongoDB desconectado');
  } catch (error) {
    console.error('❌ Error desconectando de MongoDB:', error);
    throw error;
  }
};

/**
 * Verificar estado de la conexión
 */
export const isDatabaseConnected = (): boolean => {
  return mongoose.connection.readyState === 1;
};

// Eventos de conexión
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Error de conexión de Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose desconectado de MongoDB');
});

// Manejo de cierre graceful
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('👋 Conexión de MongoDB cerrada debido a finalización de la aplicación');
  process.exit(0);
});
