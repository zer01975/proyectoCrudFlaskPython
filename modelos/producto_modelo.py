from app import db,ma, app

class Producto(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    descripcion=db.Column(db.String(100))
    subtipo=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    foto=db.Column(db.String(255))

    def __init__(self,nombre,descripcion,subtipo,precio,stock,foto):
        self.nombre=nombre
        self.descripcion=descripcion
        self.subtipo=subtipo
        self.precio=precio
        self.stock=stock
        self.foto=foto

with app.app_context():
    db.create_all() 

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre', 'descripcion','subtipo','precio','stock','foto')
 
producto_schema=ProductoSchema()            # para crear un producto
productos_schema=ProductoSchema(many=True)  # multiples registros
