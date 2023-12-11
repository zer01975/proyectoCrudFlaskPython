from app import db,ma,app

class Subtipo(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    descripcion=db.Column(db.String(100))
    
    def __init__(self,descripcion):
        self.descripcion=descripcion
    
    def __str__(self) :
        return "id:"+str(self.id)+" descripcion:"+ self.descripcion

with app.app_context():
    db.create_all()
class SubtipoSchema(ma.Schema):
    class Meta:
        fields=('id','descripcion')
 
subtipo_schema=SubtipoSchema()           # para  un registro
subtipos_schema=SubtipoSchema(many=True)  # multiples registros

