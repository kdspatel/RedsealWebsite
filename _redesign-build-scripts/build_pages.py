import sys, shutil, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import core
root = sys.argv[1]
only = sys.argv[2:] 
mods = ['p_legacy','p_auth','p_pricing','p_trades','p_info','p_trade_detail']
for m in mods:
    if only and m not in only: continue
    try: mod = __import__(m)
    except ModuleNotFoundError as e:
        if e.name == m: continue
        raise
    mod.build(root); print('built', m)
shutil.copy(os.path.join(core.SP,'pages','rs-pages.css'), os.path.join(root,'public/css/rs-pages.css'))
shutil.copy(os.path.join(core.SP,'pages','rs-pages.js'), os.path.join(root,'public/js/rs-pages.js'))
shutil.copy(os.path.join(core.SP,'pages','rs-icons.js'), os.path.join(root,'public/js/rs-icons.js'))
