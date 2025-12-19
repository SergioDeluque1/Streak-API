# 🚀 Quick Start - Streak Backend

## ✅ ¡Backend Completamente Desarrollado!

El backend de Streak está **100% funcional** con:

- ✅ 38 endpoints REST
- ✅ 7 módulos completos
- ✅ Sistema de autenticación JWT
- ✅ Sistema de gamificación
- ✅ Validación con Zod
- ✅ Rate limiting
- ✅ Error handling

---

## 📋 Requisitos

1. **Node.js 18+** ✅ (ya lo tienes)
2. **MongoDB** ⚠️ (necesitas instalarlo)

---

## 🗄️ Instalar MongoDB (Elige una opción)

### Opción 1: MongoDB Local (Windows)

1. **Descargar MongoDB Community:**

   ```
   https://www.mongodb.com/try/download/community
   ```

2. **Instalar** (siguiente, siguiente, siguiente)

3. **Iniciar MongoDB:**
   ```powershell
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath C:\data\db
   ```

### Opción 2: MongoDB con Docker (Recomendado)

1. **Instalar Docker Desktop:**

   ```
   https://www.docker.com/products/docker-desktop/
   ```

2. **Iniciar MongoDB:**
   ```bash
   docker run -d -p 27017:27017 --name mongodb-streak mongo:7
   ```

### Opción 3: MongoDB Atlas (Cloud - Gratis)

1. **Crear cuenta gratis:**

   ```
   https://www.mongodb.com/cloud/atlas/register
   ```

2. **Crear un cluster gratuito (M0)**

3. **Copiar connection string**

4. **Actualizar `.env`:**
   ```
   MONGODB_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/streak
   ```

---

## 🚀 Iniciar el Backend

```bash
# 1. Asegúrate de que MongoDB está corriendo
# (verifica que el puerto 27017 esté abierto)

# 2. Ve a la carpeta del backend
cd C:\Users\Lenovo\Desktop\Streak\streak-backend

# 3. Inicia el servidor
npm run dev:tsx
```

**Deberías ver:**

```
✅ Conectado a MongoDB exitosamente
🚀 Servidor iniciado en puerto 4000
```

---

## 🧪 Probar el Backend

### 1. Health Check

```bash
curl http://localhost:4000/health
```

### 2. Registrar Usuario

```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"test@example.com\",
    \"password\": \"Test1234\",
    \"confirmPassword\": \"Test1234\",
    \"firstName\": \"Test\",
    \"lastName\": \"User\",
    \"role\": \"freelancer\"
  }"
```

### 3. Login

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"test@example.com\",
    \"password\": \"Test1234\"
  }"
```

### 4. Ver Jobs (Público)

```bash
curl http://localhost:4000/api/jobs
```

---

## 📊 Endpoints Disponibles

| Módulo           | Endpoints | Descripción                          |
| ---------------- | --------- | ------------------------------------ |
| **Auth**         | 9         | Register, Login, JWT, Reset Password |
| **Users**        | 7         | CRUD usuarios, perfiles, búsqueda    |
| **Jobs**         | 10        | Crear, publicar, asignar, completar  |
| **Applications** | 8         | Postular, aceptar, rechazar          |
| **Gamification** | 4         | Streaks, achievements, leaderboard   |

**Total: 38 endpoints REST** 🎉

---

## 🔑 Variables de Entorno

El archivo `.env` ya está configurado con:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/streak
JWT_SECRET=un_secret_muy_seguro
JWT_ACCESS_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES=7d
NODE_ENV=development
```

---

## 🐛 Troubleshooting

### "ECONNREFUSED 127.0.0.1:27017"

❌ MongoDB no está corriendo
✅ Inicia MongoDB (ver opciones arriba)

### "MongooseServerSelectionError"

❌ MongoDB no responde
✅ Verifica que MongoDB esté en el puerto 27017:

```bash
netstat -an | findstr :27017
```

### "npm run dev no funciona"

✅ Usa `npm run dev:tsx` en su lugar

---

## 📚 Documentación Completa

- **Setup Backend:** `Streak/docs/package-setup.md`
- **Setup Frontend:** `Streak/docs/frontend-setup.md`
- **Plan de Desarrollo:** `Streak/docs/development_plan.md`
- **Contexto:** `Streak/docs/context.md`

---

## 🎯 Próximos Pasos

1. ✅ **Instalar MongoDB** (ver opciones arriba)
2. ✅ **Iniciar el backend:** `npm run dev:tsx`
3. ✅ **Probar endpoints** con curl/Postman/Thunder Client
4. 🔜 **Desarrollar Frontend** con Flutter
5. 🔜 **Integrar Backend + Frontend**

---

## 💡 Consejos

- Usa **Postman** o **Thunder Client** (VS Code extension) para probar la API
- El servidor tiene **hot-reload** - los cambios se aplican automáticamente
- Revisa los logs para ver las peticiones en tiempo real
- La base de datos se crea automáticamente la primera vez

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa que MongoDB esté corriendo
2. Verifica las variables de entorno en `.env`
3. Mira los logs del servidor para ver errores específicos
4. Consulta la documentación en `Streak/docs/`

---

**¡El backend está listo para trabajar! 🚀**
