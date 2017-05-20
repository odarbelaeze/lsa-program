Search.setIndex({docnames:["condor","condor.models","condor.record","condor.scripts","developer-quickstart","index","modules","quickstart"],envversion:53,filenames:["condor.rst","condor.models.rst","condor.record.rst","condor.scripts.rst","developer-quickstart.rst","index.rst","modules.rst","quickstart.rst"],objects:{"":{condor:[0,0,0,"-"]},"condor.dbutil":{engine:[0,1,1,""],find_one:[0,1,1,""],one_or_latest:[0,1,1,""],requires_db:[0,1,1,""],session:[0,1,1,""]},"condor.models":{base:[1,0,0,"-"],bibliography:[1,0,0,"-"],document:[1,0,0,"-"],query:[1,0,0,"-"],ranking_matrix:[1,0,0,"-"],term_document_matrix:[1,0,0,"-"]},"condor.models.base":{AuditableMixing:[1,2,1,""],eid_gen:[1,1,1,""]},"condor.models.base.AuditableMixing":{count:[1,3,1,""],created:[1,4,1,""],eid:[1,4,1,""],find_by_eid:[1,3,1,""],latest:[1,3,1,""],list:[1,3,1,""],modified:[1,4,1,""]},"condor.models.bibliography":{Bibliography:[1,2,1,""]},"condor.models.bibliography.Bibliography":{created:[1,4,1,""],description:[1,4,1,""],documents:[1,4,1,""],eid:[1,4,1,""],modified:[1,4,1,""],queries:[1,4,1,""],term_document_matrices:[1,4,1,""],words:[1,5,1,""]},"condor.models.document":{Document:[1,2,1,""]},"condor.models.document.Document":{bibliography:[1,4,1,""],bibliography_eid:[1,4,1,""],count:[1,3,1,""],created:[1,4,1,""],description:[1,4,1,""],eid:[1,4,1,""],full_text:[1,4,1,""],full_text_path:[1,4,1,""],hash:[1,4,1,""],keywords:[1,4,1,""],language:[1,4,1,""],list:[1,3,1,""],load_full_text:[1,6,1,""],mappings_from_files:[1,6,1,""],modified:[1,4,1,""],raw_data:[1,5,1,""],title:[1,4,1,""]},"condor.models.query":{Query:[1,2,1,""],QueryResult:[1,2,1,""]},"condor.models.query.Query":{bibliography:[1,4,1,""],bibliography_eid:[1,4,1,""],contributor:[1,4,1,""],created:[1,4,1,""],eid:[1,4,1,""],modified:[1,4,1,""],query_string:[1,4,1,""],results:[1,4,1,""],topic:[1,4,1,""]},"condor.models.query.QueryResult":{created:[1,4,1,""],document:[1,4,1,""],document_eid:[1,4,1,""],eid:[1,4,1,""],modified:[1,4,1,""],query:[1,4,1,""],query_eid:[1,4,1,""]},"condor.models.ranking_matrix":{RankingMatrix:[1,2,1,""]},"condor.models.ranking_matrix.RankingMatrix":{build_options:[1,4,1,""],created:[1,4,1,""],eid:[1,4,1,""],kind:[1,4,1,""],lsa_from_term_document_matrix:[1,3,1,""],matrix:[1,4,1,""],modified:[1,4,1,""],query:[1,5,1,""],ranking_matrix_path:[1,4,1,""],term_document_matrix:[1,4,1,""],term_document_matrix_eid:[1,4,1,""]},"condor.models.term_document_matrix":{TermDocumentMatrix:[1,2,1,""]},"condor.models.term_document_matrix.TermDocumentMatrix":{bibliography:[1,4,1,""],bibliography_eid:[1,4,1,""],bibliography_options:[1,4,1,""],created:[1,4,1,""],eid:[1,4,1,""],from_bibliography_set:[1,3,1,""],matrix:[1,4,1,""],matrix_path:[1,4,1,""],modified:[1,4,1,""],processing_options:[1,4,1,""],ranking_matrices:[1,4,1,""],term_list_path:[1,4,1,""],words:[1,4,1,""]},"condor.normalize":{CompleteNormalizer:[0,2,1,""],LatexAccentRemover:[0,2,1,""],Lowercaser:[0,2,1,""],Normalizer:[0,2,1,""],PunctuationRemover:[0,2,1,""],SpaceTokenizer:[0,2,1,""],Stemmer:[0,2,1,""],StopwordRemover:[0,2,1,""]},"condor.normalize.LatexAccentRemover":{accents:[0,4,1,""],apply_to:[0,5,1,""],formats:[0,4,1,""]},"condor.normalize.Lowercaser":{apply_to:[0,5,1,""]},"condor.normalize.Normalizer":{apply_to:[0,5,1,""],default_language:[0,4,1,""],default_tokenizer:[0,4,1,""]},"condor.normalize.PunctuationRemover":{apply_to:[0,5,1,""],characters:[0,4,1,""]},"condor.normalize.SpaceTokenizer":{tokenize:[0,5,1,""]},"condor.normalize.Stemmer":{apply_to:[0,5,1,""]},"condor.normalize.StopwordRemover":{apply_to:[0,5,1,""]},"condor.record":{base:[2,0,0,"-"],bib:[2,0,0,"-"],froac:[2,0,0,"-"],isi:[2,0,0,"-"],record_iterator_class:[2,1,1,""]},"condor.record.base":{RecordIterator:[2,2,1,""],RecordParser:[2,2,1,""]},"condor.record.base.RecordIterator":{get_buffer:[2,5,1,""],parser_class:[2,4,1,""]},"condor.record.base.RecordParser":{clear:[2,5,1,""],get_default:[2,5,1,""],get_mapping:[2,5,1,""],interest_fields:[2,4,1,""],list_fields:[2,4,1,""],mappings:[2,4,1,""],parse:[2,5,1,""]},"condor.record.bib":{BibtexRecordIterator:[2,2,1,""],BibtexRecordParser:[2,2,1,""]},"condor.record.bib.BibtexRecordIterator":{get_buffer:[2,5,1,""],parser_class:[2,4,1,""]},"condor.record.bib.BibtexRecordParser":{accent_remover:[2,4,1,""],clear:[2,5,1,""],guesser:[2,4,1,""],mappings:[2,4,1,""],parse:[2,5,1,""]},"condor.record.froac":{FroacRecordIterator:[2,2,1,""],FroacRecordParser:[2,2,1,""]},"condor.record.froac.FroacRecordIterator":{get_buffer:[2,5,1,""],parser_class:[2,4,1,""]},"condor.record.froac.FroacRecordParser":{default_language:[2,4,1,""],language_key:[2,4,1,""],parse:[2,5,1,""]},"condor.record.isi":{IsiRecordIterator:[2,2,1,""],IsiRecordParser:[2,2,1,""]},"condor.record.isi.IsiRecordIterator":{get_buffer:[2,5,1,""],parser_class:[2,4,1,""]},"condor.record.isi.IsiRecordParser":{clear:[2,5,1,""],mappings:[2,4,1,""],parse:[2,5,1,""]},"condor.schemas":{ModelSchema:[0,2,1,""],RecordSchema:[0,2,1,""]},"condor.schemas.ModelSchema":{opts:[0,4,1,""]},"condor.schemas.RecordSchema":{opts:[0,4,1,""]},"condor.scripts":{bibliography:[3,0,0,"-"],cli:[3,0,0,"-"],contributor:[3,0,0,"-"],evaluate:[3,0,0,"-"],matrix:[3,0,0,"-"],model:[3,0,0,"-"],query:[3,0,0,"-"],ranking:[3,0,0,"-"],utils:[3,0,0,"-"]},"condor.scripts.cli":{CondorCommand:[3,2,1,""]},"condor.scripts.cli.CondorCommand":{commands:[3,4,1,""],get_command:[3,5,1,""],list_commands:[3,5,1,""]},"condor.scripts.contributor":{QueryProps:[3,2,1,""],prop_queries:[3,1,1,""],query_props:[3,1,1,""]},"condor.scripts.contributor.QueryProps":{contributor:[3,4,1,""],extension:[3,4,1,""],path:[3,4,1,""],query_string:[3,4,1,""],topic:[3,4,1,""]},"condor.scripts.evaluate":{PerformanceResult:[3,2,1,""]},"condor.scripts.evaluate.PerformanceResult":{f1_score:[3,4,1,""],false_negatives:[3,4,1,""],false_positives:[3,4,1,""],precision:[3,4,1,""],recall:[3,4,1,""],true_negatives:[3,4,1,""],true_positives:[3,4,1,""]},"condor.util":{LanguageGuesser:[0,2,1,""],frequency:[0,1,1,""],full_text_from_pdf:[0,1,1,""],gen_to_list:[0,1,1,""],isi_text_to_dic:[0,1,1,""],to_list:[0,1,1,""],xml_to_text:[0,1,1,""]},"condor.util.LanguageGuesser":{counts:[0,5,1,""],default_lang:[0,4,1,""],guess:[0,5,1,""],languages:[0,4,1,""]},condor:{config:[0,0,0,"-"],dbutil:[0,0,0,"-"],models:[1,0,0,"-"],normalize:[0,0,0,"-"],record:[2,0,0,"-"],schemas:[0,0,0,"-"],scripts:[3,0,0,"-"],util:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","classmethod","Python class method"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:classmethod","4":"py:attribute","5":"py:method","6":"py:staticmethod"},terms:{"30algebra":7,"71estandar":7,"7programacion":7,"83modelo":7,"85video":7,"86aprendiendo":7,"87introduccion":7,"89oa":7,"92prueba":7,"97respuesta":7,"\u0107":0,"\u0153":0,"\u0161":0,"abstract":2,"case":0,"char":0,"class":[0,1,2,3],"composici\u00e3\u00b3n":7,"default":[0,1,2,7],"float":1,"function":[0,1,3,4],"import":3,"new":[0,4],"operaci\u00e3\u00b3n":7,"return":[0,1,2,3],"static":1,"true":1,"try":[0,4],"while":[2,4],Such:3,The:1,Then:4,Uses:[2,3],WOS:0,_maybe_wrap_cal:1,abl:[0,4],about:7,accent:0,accent_remov:2,accord:3,actual:1,add:1,adding:4,aggreg:0,aim:3,algorithm:7,alia:[0,2,3],all:[0,2,3],along:7,alreadi:4,also:[4,7],altern:4,although:4,amount:1,analysi:7,ani:[0,7],anoth:7,anywai:7,api:[0,1,2],appli:[0,1],applic:7,apply_to:0,appropri:2,approxim:7,aprendizaj:7,apt:7,arch:7,arg:0,argument:0,aspel:7,assum:4,attach:0,attr:3,audit:1,auditablemix:1,authorship:4,automat:4,avail:[0,7],awai:4,back:0,base:[0,3,6],beawar:7,becaus:[4,7],being:7,best:0,bib:[0,6,7],bibliographi:[0,6,7],bibliography_eid:1,bibliography_opt:1,bibset:3,bibtex:[2,7],bibtexrecorditer:2,bibtexrecordpars:2,branch:4,build:[1,3,5],build_opt:1,built:7,bunch:2,call:1,can:[0,1,7],ccut:1,chain:3,chang:[0,2],charact:0,check:[0,1,2,7],checkout:4,chunk:[1,2],circuito:7,clase:7,classmethod:1,clear:2,cli:[0,6,7],click:3,clone:4,code:5,collect:0,column:1,columndefault:1,com:4,combin:7,command:[3,4,7],commit:0,common:[1,4],commun:4,complet:0,completenorm:0,comput:[0,5],con:7,condor:[4,7],condorcommand:3,condorenv:4,condorpopul:7,config:6,configur:7,connect:[0,7],construct:2,consum:7,contain:[0,2],content:[5,6],context:0,contribut:[3,5],contributor:[0,1,4,6],controlador:7,conveni:1,core:[3,4],correct:4,cosin:1,could:4,count:[0,1],cov:4,covari:1,coverag:4,crazytalk:7,creat:[0,1,3,4,7],crucial:4,ctx:3,cuadernia:7,current:3,custom:4,daemon:7,data:[1,2,7],databas:[0,1,3,5],dataset:7,datetim:1,dbutil:6,de_at:0,de_ch:0,de_d:0,declar:1,decor:0,default_lang:0,default_languag:[0,2],default_token:0,defin:0,delet:0,dens:0,depend:4,describ:[0,1,2],descript:[1,2],detect:7,develop:5,dictionari:[0,2,7],differ:[1,2,4,7],dilut:4,document:[0,3,4,6,7],document_eid:1,doe:4,doing:4,don:0,done:7,drop:4,dump_onli:0,duplic:7,eXe:7,easi:[2,4],editor:4,editorconfig:4,effect:[0,1],eid:[0,1],eid_gen:1,element:0,en_gb:0,en_u:0,enchant:7,encourag:4,engin:[0,5,7],english:[0,2],enter:1,entri:2,environ:5,erecord:4,ergo:0,error:0,es_:0,es_co:0,es_mx:0,evalu:[0,6],everi:0,exactli:0,exampl:[4,7],exclud:0,exit:0,expand:4,ext:1,extens:3,extra:[0,1],extract:[0,1,3],f1_score:3,fail:0,fals:[0,1,3],false_neg:3,false_posit:3,familiar:4,featur:4,feed:7,field:[0,1,2,3],file:[1,2,3,4,7],file_nam:[1,3],fileformat:7,filenam:[0,2],filesystem:7,filetyp:4,filter:0,find:[0,1,2,7],find_by_eid:1,find_on:0,first:[0,4],fix:4,flag:[4,7],flush:0,folder:4,follow:4,forc:1,fork:4,format:[0,7],found:[0,1],fr_be:0,fr_fr:0,framework:4,free:4,french:[0,2],frequenc:0,froac1:7,froac:[0,6,7],froacrecorditer:2,froacrecordpars:2,from:[0,1,3,7],from_bibliography_set:1,full:1,full_text:1,full_text_from_pdf:0,full_text_path:1,func:0,funcion:4,furhtermor:7,furthermor:[0,4],futur:3,gen_to_list:0,gener:[0,1],german:[0,2],get:[1,2,7],get_buff:2,get_command:3,get_default:2,get_map:2,git:4,github:4,given:[0,1,2],glob:7,global:0,ground:[3,4],group:1,guess:[0,1],guesser:2,handl:[0,1],has:[0,1],hash:[1,2,7],have:[0,2,7],here:4,honor:4,howev:7,http:4,huge:0,idf:1,implement:3,includ:[1,3,4],indent:4,index:[1,5,7],infinit:0,inject:0,input:2,instal:[4,7],instanc:0,instead:0,interest:[1,2],interest_field:2,interfac:7,intern:1,invert:7,invoke_without_command:3,involv:7,isi:[0,6,7],isi_text_to_d:0,isirecorditer:2,isirecordpars:2,it_it:0,italian:[0,2],item:[0,1],iter:[0,1,2],its:[1,4],just:[1,2,4],keep:[1,4],kei:[0,1,4],keyboard:4,keyword:[1,2],kind:[1,2,4,7],know:0,knowledg:2,kwarg:[0,1],lambda:1,languag:[0,1,2,7],language_kei:2,languageguess:[0,2],latent:[5,7],latest:[0,1,3,7],latex:0,latexaccentremov:[0,2],lead:0,learn:7,length:[1,4],letter:0,libr:7,like:0,limit:1,line:[2,3,4],lineal:7,list:[0,1],list_command:3,list_field:2,load:1,load_full_text:1,load_onli:0,local:1,look:[0,1,2],low:4,lowercas:0,lsa:[1,3,5],lsa_from_term_document_matrix:1,made:4,make:[0,1,4],maker:0,manag:[0,1,5],mani:0,manual:4,map:[1,2],mappings_from_fil:1,mark:2,marshmallow:0,match:[1,7],matric:[3,5],matrix:[0,1,6,7],matrix_path:1,mayb:[0,4],member:4,metadata:2,method:2,might:[0,4],mix:1,mkvirtualenv:4,model:[0,5,6],modelschema:0,modern:4,modif:2,modifi:1,modul:[4,5,6],mongo:0,mongodb:7,more:[4,7],most:[1,3,4,7],multicommand:3,name:[2,3,4,7],need:[4,7],next:5,no_args_is_help:3,non:0,none:[0,1,3],normal:[1,2,6],normalizer_class:1,now:5,nullabl:1,number:[1,3],numpi:1,oaa:7,obj:0,object:[0,1,2,3],objeto:7,odarbelaez:4,off:1,offer:5,onc:7,one:[0,1,4,7],one_or_latest:0,onli:[0,4],onupd:1,open:4,oper:7,opt:0,optim:4,orden:7,order:[4,7],ordereddict:0,organ:7,origin:4,other:[3,4,5],otherwis:[0,1,4],our:[0,1,4],out:[0,1,2],outlin:[2,4],over:[1,2],overhead:0,own:4,packag:[5,6,7],pacman:7,page:5,paramet:[0,1,2,3],parcial:7,pars:2,parser:[2,4],parser_class:2,part:[0,4],partial:[0,1],pass:1,path:[1,3],pattern:4,pdf:[0,1],perform:7,performanceresult:3,pick:4,pip:[4,7],piprequir:4,plain:[0,2,7],plugin:4,point:4,popul:[3,5],port:7,portugues:[0,2],posgresql:7,precis:3,prefix:0,prepar:5,present:3,primari:1,primary_kei:1,primer:7,proce:4,processing_opt:1,program:[0,4,7],project:4,prop_queri:3,provid:[0,7],pt_br:0,pt_pt:0,pull:4,punctuat:0,punctuationremov:0,push:4,pwd:4,pymongo:0,pypi:7,pytest:4,python3:4,python:4,queri:[0,5,6],query_eid:1,query_prop:3,query_str:[1,3],queryprop:3,queryresult:1,quickstart:5,random:1,rank:[0,1,5,6,7],rankin:3,ranking_matric:1,ranking_matrix:[0,6],ranking_matrix_path:1,rankingmatrix:1,raw:[1,2],raw_data:1,read:1,recal:3,reccord:2,record:[0,1,3,6,7],record_iterator_class:2,record_typ:[1,2],recorditer:2,recordpars:2,recordschema:0,refactor:4,regress:4,regular:1,regularis:1,relacion:7,relat:1,relev:1,remov:0,repo:4,repositori:[4,5],repres:[1,2],represent:[0,1],request:[0,4],requir:[0,2],requires_db:0,rerun:7,respect:0,respons:2,result:[0,1],result_callback:3,retriev:1,rewrit:4,right:4,roapmanizales1:7,roapmanizales2:7,roapmanizales3:7,roapmanizales4:7,roapmanizales5:7,roll:0,run:[0,2,5,7],runner:4,schema:[1,6],schemaopt:0,script:[0,4,6],search:[1,5,7],semant:[5,7],sentenc:0,session:[0,1],set:[1,3,5],setup:[4,5],sever:7,should:[0,1,7],show:0,side:1,simpl:0,simplifi:0,singl:1,singleton:0,site:1,smash:4,softwar:4,some:[0,4,7],someth:0,sourc:[0,1,2,3,4,7],space:0,spacetoken:0,spanish:[0,2],specifi:7,spell:7,sqlalchemi:1,start:[4,7],state:3,stemm:0,stemmer:0,step:5,still:7,stipup:7,stopword:0,stopwordremov:0,store:[1,2],strict:0,string:[0,1,2],subcommand_metavar:3,submodul:6,subpackag:6,sudo:7,suggest:4,suit:[4,5,7],support:[4,7],system:7,tabl:1,taht:1,take:[0,3],term:[1,3,7],term_document_matric:1,term_document_matrix:[0,6],term_document_matrix_eid:1,term_list_path:1,termdocumentmatrix:1,test:5,test_:4,text:[0,1,2,4,7],thei:2,them:0,thi:[0,1,2,3,4,7],thousand:7,three:7,through:[0,2,4],time:7,timestamp:1,titl:[1,2],to_list:0,token:[0,1],tool:[0,1,5,7],topic:[1,3],transform:[0,2],tree:7,tri:0,true_neg:3,true_posit:3,truth:3,tupl:3,turn:0,two:0,txt:[2,4,7],type:[1,2],ubuntu:7,uncommit:0,under:0,underli:0,understand:4,unicod:[0,1],uniqu:1,usabl:2,use:[0,1,2,4,7],used:[4,7],useful:[0,2],user:[1,5],usernam:4,uses:7,using:[4,7],usual:1,util:[2,6],utp:7,valu:[0,2],veri:4,version:7,via:4,virtual:4,virtualenvwrapp:4,vista:7,wai:[2,4],want:7,warn:3,web:2,well:[0,5],wellcom:4,when:[0,2,4,7],whenev:7,where:0,which:[0,4],who:4,wipe:[3,7],wipedb:7,within:[1,4],word:[0,1],work:[0,3,4,5],worri:1,would:0,write:4,writen:4,xml:[0,7],xml_to_text:0,yet:7,yield:2,you:7,your:[4,7],yourself:4},titles:["condor package","condor.models package","condor.record package","condor.scripts package","Developer quickstart","Welcome to condor-ir\u2019s documentation!","condor","Quickstart for users"],titleterms:{base:[1,2],bib:2,bibliographi:[1,3],build:7,can:4,cli:3,code:4,condor:[0,1,2,3,5,6],config:0,content:[0,1,2,3],contribut:4,contributor:3,databas:7,dbutil:0,develop:4,document:[1,5],environ:4,evalu:3,froac:2,guidelin:4,how:4,indic:5,isi:2,matrix:3,model:[1,3,7],modul:[0,1,2,3],next:7,normal:0,packag:[0,1,2,3],popul:7,prepar:7,queri:[1,3,7],quickstart:[4,7],rank:3,ranking_matrix:1,recomend:4,record:2,repositori:7,run:4,schema:0,script:3,set:4,setup:7,step:7,submodul:[0,1,2,3],subpackag:0,tabl:5,term_document_matrix:1,test:4,user:7,util:[0,3],welcom:5,what:4,you:4}})