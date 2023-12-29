from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_mysqldb import MySQL

# from flaskext.mysql import MySQL
# from flask_SQLAlchemy import SQLAlchemy
# from flask import Flask, render_template, request
#from flask_mysqldb import Mysql
# from werkzeug.security import check_password_hash, generate_password_hash

# Inisiasi Object flask
app = Flask(__name__)

# app.secret_key = 'hanifah'
app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER']= 'root'
app.config['MYSQL_PASSWORD']= ''
app.config['MYSQL_DB']= 'skripsi'

mysql = MySQL(app)

#@app.route("/")
# @app.route("/login_asli")
#def loginku():
# return render_template("login_asli.html")

@app.route("/")
def index():
    return render_template("login.html")

# @app.route("/home")
# def home():
#     return render_template("home.html")

@app.route("/add")
def add():
    return render_template("add.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# @app.route('/tes', methods=['GET', 'POST'])
# def tes():
#     if request.method == 'POST':
#         username = request.form['username']
#         email = request.form['email']

#         cur = mysql.connection.cursor()
#         # cur.execute("INSERT INTO table_users (name,email) VALUES (%s,%s)", (username, email))
#         cur.execute("INSERT INTO table_user (name,email) VALUES (%s,%s)", (username, email))
#         mysql.connection.commit()
#         cur.close()
#         return "Sukses"
    
#     return render_template('simple.html')

# @app.route('/tes_2')
# def tes_2():
#     cur = mysql.connection.cursor()

#     user = cur.execute("SELECT * FROM table_user")

#     if user > 0:
#         userDetails = cur.fetchall()
#         return render_template('user.html', userDetails=userDetails)
    
@app.route('/home')
def home():
    cur = mysql.connection.cursor()

    user = cur.execute("SELECT * FROM `jdosen`")

    if user > 0:
        userDetails = cur.fetchall()
        # return render_template('home.html', userDetails=userDetails)
    
    user_2 = cur.execute("SELECT * FROM waktu")

    if user_2 > 0:
        userDetails_2 = cur.fetchall()
    
    return render_template('home.html', userDetails=userDetails,userDetails_2=userDetails_2)

@app.route('/RuanganSenin')
def RuanganSenin():
    cur = mysql.connection.cursor()

    user = cur.execute("SELECT * FROM `jdosen`")

    if user > 0:
        userDetails = cur.fetchall()
        # return render_template('home.html', userDetails=userDetails)
    
    user_2 = cur.execute("SELECT * FROM waktu")

    if user_2 > 0:
        userDetails_2 = cur.fetchall()
    
    return render_template('RuanganSenin.html', userDetails=userDetails,userDetails_2=userDetails_2)

if __name__ == "__main__":
    app.run(debug=True, port=12122)
