from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import xml.etree.ElementTree as ET
import json
P=Path(__file__).resolve().parents[1]
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.links=[];self.images=[];self.h1=0
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if t=='h1':self.h1+=1
  for key in ['href','src']:
   if key in a:self.links.append(a[key])
  if t=='img':self.images.append(a)
docs={}
for path in P.rglob('*.html'):
 d=Doc();d.feed(path.read_text());docs[path]=d
 assert len(d.ids)==len(set(d.ids)),f'duplicate ids {path}'
 assert d.h1==1,f'h1 {path}'
 for img in d.images:assert all(x in img for x in ['alt','width','height']),f'image metadata {path}'
count=0
for path,d in docs.items():
 for link in d.links:
  u=urlsplit(link)
  if u.scheme or u.netloc:continue
  target=(path.parent/unquote(u.path)).resolve() if u.path else path
  assert target.is_relative_to(P),f'path escapes {link}'
  assert target.exists(),f'missing {path}: {link}'
  if u.fragment:assert u.fragment in docs[target].ids,f'missing anchor {link}'
  count+=1
for p in P.rglob('*.svg'):ET.parse(p)
assert len(docs)==5
assert len([x for x in docs[P/'index.html'].ids if x in ['inicial','instituto','medicinas','vivencias','praticas','caminhos','biblioteca','artesanato','arvore','contato']])==10
assert len(json.loads((P/'content/editorial.json').read_text())['articles'])==3
print(json.dumps({'html_pages':len(docs),'local_references_checked':count,'svg_files':len(list(P.rglob('*.svg'))),'ten_areas':True,'result':'PASS'},indent=2))
