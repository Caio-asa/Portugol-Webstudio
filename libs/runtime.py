import os, pexpect, sys
while(True):
    print("Olá mundo!")
    command = str(input())
    if("~|^!+RUNTIME+!^|~" in command):
        print("~|^!+START+!^|~")
        path = os.getcwd() + "/" + command.replace("~|^!+RUNTIME+!^|~", "")
        comando = "java -Dfile.encoding=UTF-8 -Xms128m -Xmx512m -d64 -jar \"" + os.getcwd() + "/libs/portugol-console.jar" +"\" \""+ path +"\""
        child = pexpect.spawnu(comando)
        child.interact()
        print("~|^!+END+!^|~")
        if(os.path.isfile(path)):
            os.unlink(path)
