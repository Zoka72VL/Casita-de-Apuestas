from peewee import DoesNotExist
from backend.models.Rol import Rol
from backend.models.Permiso import Permiso
from backend.models.RolPermiso import RolPermiso

class PermisoService:

    @staticmethod
    def inicializar_roles_y_permisos():
        """
        Crea roles y permisos predeterminados si no existen.
        """
        roles = ["admin", "usuario"]
        permisos = ["apostar", "crear_evento", "ver_saldo"]

        # Crear roles
        for r in roles:
            Rol.get_or_create(nombre=r)

        # Crear permisos
        for p in permisos:
            Permiso.get_or_create(nombre=p)

        # Asignar permisos a roles
        asignaciones = {
            "admin": permisos,  # Admin tiene todos
            "usuario": ["apostar", "ver_saldo"]
        }

        for rol_nombre, permisos_asignados in asignaciones.items():
            rol = Rol.get(Rol.nombre == rol_nombre)
            for nombre_permiso in permisos_asignados:
                permiso = Permiso.get(Permiso.nombre == nombre_permiso)
                RolPermiso.get_or_create(rol=rol, permiso=permiso)

    @staticmethod
    def tiene_permiso(usuario, nombre_permiso):
        """
        Verifica si un usuario tiene un permiso específico.
        """
        try:
            permiso = Permiso.get(Permiso.nombre == nombre_permiso)
            return RolPermiso.select().where(
                (RolPermiso.rol == usuario.role) &
                (RolPermiso.permiso == permiso)
            ).exists()
        except DoesNotExist:
            return False
