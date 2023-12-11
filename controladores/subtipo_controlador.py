#controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa

from app import *
from flask import Flask ,jsonify ,request
from modelos.subtipo_modelo import *

@app.route('/subtipos',methods=['GET'])
def get_Subtipos():
    all_subtipos=Subtipo.query.all()   # es una lista
    result=subtipos_schema.dump(all_subtipos)
    print(result)
    return jsonify(result)
 
@app.route('/subtipos/<id>',methods=['GET'])
def get_subtipo(id):
    subtipo=Subtipo.query.get(id)
    return subtipo_schema.jsonify(subtipo)

@app.route('/subtipos', methods=['POST']) # crea ruta o endpoint
def create_subtipo():
    #print(request.json)  # request.json contiene el json que envio el cliente
    descripcion=request.json['descripcion']
    
    new_subtipo=Subtipo(descripcion)
    db.session.add(new_subtipo)
    db.session.commit()
    return subtipo_schema.jsonify(new_subtipo)


@app.route('/subtipos/<id>' ,methods=['PUT'])
def update_subtipo(id):
    subtipo=Subtipo.query.get(id)   
    descripcion=request.json['descripcion']
    subtipo.descripcion=descripcion    
    db.session.commit()
    return subtipo_schema.jsonify(subtipo)
 
@app.route('/subtipos/<id>',methods=['DELETE'])
def delete_subtipo(id):
    subtipo=Subtipo.query.get(id)
    db.session.delete(subtipo)
    db.session.commit()
    return subtipo_schema.jsonify(subtipo)
