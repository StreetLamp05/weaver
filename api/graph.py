class SongNode:
    def __init__(self, data):
        self.data = data
        self.children = []

    def add_child(self, child_node):
        """Adds a child node to the current node."""
        self.children.append(child_node)

    def display_tree(self, level=0):
        """Recursively prints the tree structure."""
        print(" " * (level * 4) + str(self.data))
        for child in self.children:
            child.display_tree(level + 1)

class Web:
    def __init__(self, root):
        self.root = root
        self.recommended = []

    
