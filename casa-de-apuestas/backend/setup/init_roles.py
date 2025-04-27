from backend.services.permiso_service import PermisoService
from backend.models.BaseModel import db

def inicializar_roles_y_permisos():
    """
    Inicializa los roles y permisos básicos del sistema si no existen.
    """
    try:
        db.connect(reuse_if_open=True)
        db.create_tables([])  # No pasa nada si está vacío, evita error en otros motores
        PermisoService.inicializar_roles_y_permisos()
        print("✅ Roles y permisos inicializados correctamente.")
    except Exception as e:
        print(f"⚠️ Error al inicializar roles y permisos: {str(e)}")
    finally:
        if not db.is_closed():
            db.close()
