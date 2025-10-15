from flask import Flask, jsonify, json
from flask_cors import CORS

# 1. Creamos la aplicación
app = Flask(__name__)

# 2. Configuramos CORS para que acepte pedidos de cualquier lado
CORS(app)

# 3. Función para cargar los productos desde el archivo JSON
def cargar_productos():
    with open('productos.json', 'r', encoding='utf-8') as f:
        return json.load(f)

# 4. Creamos la "ruta" o "URL" donde vamos a servir los productos
@app.route('/api/productos')
def get_productos():
    # Cuando alguien pida esta URL, le devolvemos los productos
    productos = cargar_productos()
    return jsonify(productos)

# 5. Hacemos que la aplicación se ejecute
if __name__ == '__main__':
    app.run(debug=True) # debug=True es para que se reinicie solo si hacés cambios