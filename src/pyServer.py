import os
import sys
import urllib.parse
import html

from http.server import BaseHTTPRequestHandler
from http.server import HTTPServer
from http import HTTPStatus
from datetime import datetime,timedelta,timezone

PORT = 8000

#-------------------------------------------------------
data = {}
data["1234123412341234"] = "test1,test2,123,455,24,5,6,,4,,4344356,,34,ert"
data["0000000000000000"] = "testdata2"
#-------------------------------------------------------

def test():
    # -*- coding: utf-8 -*-
    curDTobj=datetime.now()
    dateStr=curDTobj.strftime("%d %b,%y")
    print("dateStr:",dateStr)
    timestamp=1562889600


    tz=timezone(timedelta(hours=+9),"JST")
    jst=datetime.fromtimestamp(timestamp,tz)

    print(tz)
    print(jst)

    print(curDTobj)

    print(curDTobj.strftime("%H:%M:%S"))
    minutes=input("how many minutes to countdown>>")
    minutes=int(minutes)
    secondes=minutes*60   
    print(type(curDTobj))   

    def countdown(secondes):
        cur1=datetime.now()
        
        
        for i in range (0,secondes) :
            cur2=datetime.now()
            dif=cur2-cur1
            
            # difstr=dif.strftime("%M:%S")
        
                
        #return difstr  
        return dif
    print("countdown:")
    print(countdown(secondes))




class StubHttpRequestHandler(BaseHTTPRequestHandler):
    server_version = "HTTP Stub/0.1"
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def do_GET(self):
        enc = sys.getfilesystemencoding()
        title = "HTTP Stub"

        r = []
        r.append('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" '
                 '"http://www.w3.org/TR/html4/strict.dtd">')
        r.append('<html>\n<head>')
        r.append('<meta http-equiv="Content-Type" '
                 'content="text/html; charset=%s">' % enc)
        r.append('<title>%s</title>\n</head>' % title)
        r.append('<body>\n<h1>%s</h1>' % title)
        r.append('<hr>\n<ul>')
        r.append("Stub Opened.")
        r.append('</ul>\n<hr>\n</body>\n</html>\n')
        encoded = '\n'.join(r).encode(enc, 'surrogateescape')

        self.send_response(HTTPStatus.OK)
        self.send_header("Content-type", "text/html; charset=%s" % enc)
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()

        self.wfile.write(encoded)     

    def do_POST(self):
        enc = sys.getfilesystemencoding()

        length = self.headers.get('content-length')
        nbytes = int(length)
        rawPostData = self.rfile.read(nbytes)
        decodedPostData = rawPostData.decode(enc)
        postData = urllib.parse.parse_qs(decodedPostData)

        pan = postData["PAN"]

        resultData = []
        for p in pan:
            resultData.append(data[p])

        encoded = '\n'.join(resultData).encode(enc)
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-type", "text/plain; charset=%s" % enc)
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()

        self.wfile.write(encoded)

handler = StubHttpRequestHandler
httpd = HTTPServer(('',PORT),handler)
httpd.serve_forever()
