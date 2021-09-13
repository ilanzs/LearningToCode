import random
import math
import pygame

# make the screen
WIDTH, HEIGHT = 700, 700
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Maze Generator")
FPS = 100000000000
clock = pygame.time.Clock()

# make variables for the maze
w = 10
cols = math.floor(WIDTH / w)
rows = math.floor(HEIGHT / w)
grid = []
current = None
stack = []

# set all the colours
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0);
PURPLE = (255, 0, 255)

def index(i, j):
    if i < 0 or j < 0 or i > cols-1 or j > rows-1:
        return None

    return i + j * cols

def removeWalls(a, b):
    x = a.i - b.i
    if x == 1:
        a.walls[3] = False
        b.walls[1] = False

    elif x == -1:
        a.walls[1] = False
        b.walls[3] = False

    y = a.j - b.j
    if y == 1:
        a.walls[0] = False
        b.walls[2] = False

    elif y == -1:
        a.walls[2] = False
        b.walls[0] = False

# make a class for the cells
class Cell():

    # make an initialize function
    def __init__(self, i, j):
        self.i = i
        self.j = j
        self.walls = [True, True, True, True]
        self.visited = False

    def highlight(self):
        x = self.i * w
        y = self.j * w
        pygame.draw.rect(WIN, BLUE, pygame.Rect(x, y, w, w))

    def checkNeighbors(self):
        neighbors = []

        try: top    = grid[index(self.i, self.j - 1)]
        except: top = None
        try: right  = grid[index(self.i + 1, self.j)]
        except: right = None
        try: bottom = grid[index(self.i, self.j + 1)]
        except: bottom = None
        try: left    = grid[index(self.i - 1, self.j)]
        except: left = None

        if  top != None and not top.visited:
            neighbors.append(top)

        if  right != None and not right.visited:
            neighbors.append(right)

        if bottom != None and not bottom.visited:
            neighbors.append(bottom)

        if left != None and not left.visited:
            neighbors.append(left)

        if len(neighbors) > 0:
            r = random.randint(0, len(neighbors) - 1)
            return neighbors[r]

        else:
            return None

    def show(self):
        x = self.i * w
        y = self.j * w

        # change the colour of visited cells
        if self.visited:
            pygame.draw.rect(WIN, BLACK, pygame.Rect(x, y, w, w))

        if self.walls[0]:
            pygame.draw.line(WIN, WHITE, (x, y), (x + w, y), 1)         # TOP

        if self.walls[1]:
            pygame.draw.line(WIN, WHITE, (x + w, y), (x + w, y + w), 1) # RIGHT

        if self.walls[2]:
            pygame.draw.line(WIN, WHITE, (x + w, y + w), (x, y + w), 1) # BOTTOM

        if self.walls[3]:
            pygame.draw.line(WIN, WHITE, (x, y + w), (x, y), 1)         # LEFT

# make the main function
def main():

    # make all the cells
    for j in range(rows):
        for i in range(cols):
            cell = Cell(i, j)
            grid.append(cell)

    current = grid[0]

    run = True
    while run:

        # draw all the cells
        for i in range(len(grid)):
            grid[i].show()
            current.highlight()

        current.visited = True
        # STEP 1
        next = current.checkNeighbors()
        if next != None:
            next.visited = True

            # STEP 2
            stack.append(current)

            # STEP 3
            removeWalls(current, next)

            # STEP
            current = next

        elif len(stack) > 0:
            current = stack.pop()

        # colour the last cell
        pygame.draw.rect(WIN, RED, pygame.Rect(WIDTH - w + 1, HEIGHT - w + 1, w - 2, w - 2))

        clock.tick(FPS)

        pygame.display.update()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

    pygame.quit()

if __name__ == '__main__':
    main()
