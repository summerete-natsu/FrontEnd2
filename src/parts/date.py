# -*- coding: utf-8 -*-

from datetime import datetime,timedelta,timezone




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





#if __name__=='__main__':
#   countdown.main()

    

    
    
   
