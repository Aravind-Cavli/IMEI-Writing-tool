"""
ASGI config for IMEI_Writter project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application
# from channels.auth import AuthMiddlewareStack
# from C16QS_IMEI_Writter import routing
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'IMEI_Writter.settings')

# application = ProtocolTypeRouter({"http": get_asgi_application(),
#     # add WebSocket routing
#     "websocket": AuthMiddlewareStack(
#         URLRouter(
#             routing.websocket_urlpatterns
#         )
#     ),
#     })
