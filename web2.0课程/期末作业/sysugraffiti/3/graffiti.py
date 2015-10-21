import os.path
import random
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import re

from tornado.options import define, options
define("ports", default=8888, help="Run on the given port ", type=int)

class MainHandler(tornado.web.RequestHandler):
	@tornado.web.asynchronous
	def get(self):
		self.render( 'about.html' )
        
class AboutHandler(tornado.web.RequestHandler):
	@tornado.web.asynchronous
	def get(self):
		self.render( 'about.html' )
        
class IndexHandler(tornado.web.RequestHandler):
	@tornado.web.asynchronous
	def get(self):
		self.render( 'index.html' )
        
class BlogHandler(tornado.web.RequestHandler):
	@tornado.web.asynchronous
	def get(self):
		self.render( 'blog.html' )
        
class ContactHandler(tornado.web.RequestHandler):
	@tornado.web.asynchronous
	def get(self):
		self.render( 'contact.html' )

urls = [
    (r"/", MainHandler),
    (r"/about.html", AboutHandler),
    (r"/index.html", IndexHandler),
    (r"/blog.html", BlogHandler),
    (r"/contact.html", ContactHandler)
]