# import bcrypt
# from peewee import CharField, DateTimeField, AutoField, ForeignKeyField
# from datetime import datetime
# from backend.models.BaseModel import BaseModel
# from backend.models.RolesPermisos import Role

# class Players(BaseModel):
#     id = AutoField()  # ID autoincremental
#     nombre = CharField(max_length=100)
#     pais = CharField( max_length=100)
#     elo = CharField( max_length=100)
#     clan= CharField( max_length=100)

# # Función para registrar un nuevo usuario con hash de contraseña
# def registrar_player(nombre, pais, elo, clan):
#     try:
#         if Players.select().where(Players.nmombre == nombre).exists():
#             return {"success": False, "message": "El nombre ya está registrado"}

#         return {
#             "success": True,
#             "message": "Player registrado exitosamente",
#             "players": {
#                 "id": players.id,
#                 "nombre": players.nombre,
#                 "pais": players.pais,
#                 "elo": players.elo,
#                 "clan": players.clan,
#             }
#         }
#     except Exception as e:
#         return {"success": False, "message": str(e)}
    

