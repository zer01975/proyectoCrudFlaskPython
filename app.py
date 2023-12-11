from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me per)     # soluciona el error cuando el frontend accede a los endpoint que genera el backend

""" app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:1234@localhost/proyecto_crud' """
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:1234@localhost/proyecto_crud'
#                                          usuario:clave@localhost/nombreBaseDeDAtos

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)




from controladores.producto_controlador import *

from controladores.subtipo_controlador import *


# programa principal
if __name__=='__main__': 
       app.run(debug=True, port=5000) 
       