# Memanggil Libary yang digunakan
from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_mysqldb import MySQL

# Inisiasi Object flask
app = Flask(__name__)

# Config Sesuai Dengan Computer
app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER']= 'root'
app.config['MYSQL_PASSWORD']= ''
app.config['MYSQL_DB']= 'db_tskrip'
mysql = MySQL(app)

# Merupakan fungsi untuk saat awal website diakses
@app.route("/")
def index():
    return render_template("home.html")

# Merupakan fungsi untuk saat membuka bagian untuk menambahkan jadwal atau dosen
@app.route("/add")
def add():
    return render_template("add.html")

# Merupakan fungsi untuk membuka bagian untuk menampilkan dashboard
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# Merupakan fungsi untuk membuka bagian untuk menampilkan Ruangan
@app.route('/Ruangan')
def Ruangan():
    cur = mysql.connection.cursor()

    user = cur.execute("SELECT * FROM `jdosen`")

    if user > 0:
        userDetails = cur.fetchall()
    
    user_2 = cur.execute("SELECT * FROM waktu")

    if user_2 > 0:
        userDetails_2 = cur.fetchall()
    
    day = cur.execute("SELECT * FROM jdosen WHERE Hari = 'Senin'")

    if day > 0:
        userDetails_3 = cur.fetchall()
    
    return render_template('Ruangan.html', userDetails=userDetails,userDetails_2=userDetails_2,userDetails_3=day)

# Membuat dimana tidak udah melakukan debungging secara 
# Terus menerus saat ada perubahan
if __name__ == "__main__":
    app.run(debug=True, port=12122)
