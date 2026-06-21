import os

def fix_file(f, var_name, suffix):
    if not os.path.exists(f): return
    with open(f, 'r') as file:
        content = file.read()

    # We want: title: `${var_name} — ${suffix}`,
    # The previous failed attempts might have left 'title: ,'

    target = f"title: `${{{var_name}}} — {suffix}`,"
    content = content.replace("title: ,", target)

    # Also for openGraph
    content = content.replace("title: ,", target)

    with open(f, 'w') as file:
        file.write(content)

fix_file('app/servers/[slug]/page.tsx', 'server.name', 'Open Box')
fix_file('app/doc/[slug]/page.tsx', 'docMeta.title', 'Open Box Docs')
