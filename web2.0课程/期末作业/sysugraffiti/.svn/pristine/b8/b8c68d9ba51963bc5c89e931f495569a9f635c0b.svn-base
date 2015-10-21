import sys, os
root = os.path.dirname(__file__)
sys.path.insert(0, os.path.join(root, 'tornado-3.2.1'))

import tornado.web
from tornado.httpclient import AsyncHTTPClient

from graffiti import urls as graffitiurls

settings = {
    "static_path" : os.path.join(os.path.dirname(__file__), "static"),
    "template_path" : os.path.join(os.path.dirname(__file__), "templates"),        
    'debug': True
}

application = tornado.web.Application(graffitiurls, **settings)