from flask import Flask, redirect, render_template
from flask.globals import request
from flask_cors import CORS

from url_repository.url_repository_interface import InMemUrlRepository

url_repository = InMemUrlRepository()
app = Flask(__name__)
CORS(app)

APP_URL = 'localhost:5000'

@app.route('/', methods = ['GET'])
@app.route('/shortThis', methods = ['GET'])
def shortThis():
  return render_template('login.html')

@app.route('/shortThis', methods = ['POST'])
def shortenUrl():
  url = request.form['url']
  shortened_url = APP_URL + '/' + url_repository.shorten(url)
  print(shortened_url)
  return { 'shortenedUrl': shortened_url }

@app.route('/<short_url>')
def admin(short_url):
  #load long url from short url DB
  long_url = url_repository.get_long_url(short_url)
  return redirect(long_url) # url_for takes in argument the name of a function  (like home). It has to be between quotes


if __name__ =='__main__':
    app.run(debug = True)