float[] nums;

void setup() {
  size(800, 500);
  nums = new float[width];

  for (int i = 0; i < nums.length - 1; i++) {
    nums[i] = random(height);
  }
}

void draw() {
  background(0);
  for (int i = 0; i < nums.length - 1; i++) {
    stroke(255);
    line(i, height, i, nums[i]);
  }
  quickSort(nums, 0, nums.length - 1);
}

int quickSort(float[] arr, int start, int end) {
  if (start >= end) {
    return 0;
  }

  int index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return 0;
}

int partition(float[] arr, int start, int end) {
  int pivotIndex = start;
  float pivotValue = arr[end];
  for (int i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
    swap(arr, i, pivotIndex);
    pivotIndex++;
    }
  }
 swap(arr, pivotIndex, end);
 return pivotIndex;
}

void swap(float[] arr, int a, int b) {
 float temp = arr[a];
 arr[a] = arr[b];
 arr[b] = temp;
}
